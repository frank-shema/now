import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { fetchAllProjects } from '../services/project.service';
import { FadeLoader } from 'react-spinners';

const Plan: React.FC = () => {
        const [projects, setProjects] = useState<Project[]>([]);
        const [loading, setLoading] = useState(true)
        useEffect(() => {
                const fetchProjects = async () => {
                        try {
                                const result = await fetchAllProjects();
                                console.log(result)
                                if (Array.isArray(result)) {
                                        setProjects(result);
                                        setLoading(false)
                                }
                        } catch (error) {
                                toast.error('Error Getting All Projects');
                                setLoading(false)
                        }
                };
                fetchProjects();
        }, []);
        return (
                <div className='w-full h-full overflow-y-auto overflow-x-hidden p-5'>
                        <Helmet>
                                <title>SHDR | Plan</title>
                        </Helmet>
                        <div className="my-2">
                                <div className="p-3 border-b-2 flex items-center justify-between">
                                        <p className='text-[#2D2D2D]  font-bold '>Plans</p>
                                        <Link to={"/plans/create"} className='flex gap-2 items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path d="M6 10V6M6 6V2M6 6H10M6 6H2" stroke="#555555" stroke-width="2" stroke-linecap="round" />
                                                </svg>
                                                <p className='text-[#555555] font-semibold'>Add Plan</p>
                                        </Link>
                                </div>
                        </div>
                        {loading ? (
                                <div className='w-full h-[400px] flex items-center justify-center'>
                                        <FadeLoader color='gray' />
                                </div>
                        ) : (
                                <div>
                                        {projects?.length === 0 ? (
                                                <div className='w-full h-[200px] flex items-center justify-center'>
                                                        <p className="text-2xl text-gray-700">No Plans so far</p>
                                                </div>
                                        ) : (
                                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4'>
                                                        {projects?.map((project) => {
                                                                return (
                                                                        <Link to={`/plans/${project._id}`} key={project._id} className='border-2 rounded-lg   shadow-md'>
                                                                                <img src={project.images[0]} alt={project._id} className='w-full object-cover mb-2 rounded-t-lg' />
                                                                                <div className="p-3">
                                                                                        <div className="flex justify-between items-center">
                                                                                                <p className='text-sm font-semibold '>{project.name}</p>
                                                                                                <p className='text-xs text-[#BFBEBE] '>Uploaded by {project.uploadedBy.fullName}</p>
                                                                                        </div>
                                                                                        <p className=' font-semibold  text-xs text-[#898989]'>${project.planPrice.toLocaleString()}</p>
                                                                                </div>
                                                                        </Link>
                                                                )
                                                        })}
                                                </div>
                                        )}
                                </div>
                        )}
                </div>
        )
}

export default Plan