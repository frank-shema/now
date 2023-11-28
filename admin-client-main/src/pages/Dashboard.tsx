import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { fetchAllProjects } from '../services/project.service';
import { toast } from 'react-hot-toast';
import { FadeLoader } from 'react-spinners';

const Dashboard: React.FC = () => {
        const [loading, setLoading] = useState(true)
        const [projects, setProjects] = useState<Project[]>([]);
        useEffect(() => {
                const fetchProjects = async () => {
                        try {
                                const result = await fetchAllProjects();
                                if (Array.isArray(result)) {
                                        setProjects(result);
                                }
                                setLoading(false)
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
                                <title>SHDR | Admin</title>
                        </Helmet>
                        {loading ? (
                                <div className='w-full h-[400px] flex items-center justify-center'>
                                        <FadeLoader color='gray' />
                                </div>
                        ) : (
                                <div>
                                        <div className="p-3 my-2">
                                                <div className="border-b-2">
                                                        <p className='text-[#2D2D2D]  font-bold '>Overview</p>
                                                </div>
                                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  gap-5 my-4">
                                                        <div className="border-2 rounded-lg p-2">
                                                                <div className="flex items-start gap-2">
                                                                        <img src="/svg/upload.svg" alt="Upload" />
                                                                        <p className='font-medium text-sm'>Daily Total Uploads</p>
                                                                </div>
                                                                <p className="text-[30px] font-bold text-center my-2">{projects.filter((p) => p.createdAt === new Date()).length}</p>
                                                        </div>
                                                        <div className="border-2 rounded-lg p-2">
                                                                <div className="flex items-start gap-2">
                                                                        <img src="/svg/upload.svg" alt="Upload" />
                                                                        <p className='font-medium text-sm'>Monthly Total Uploads</p>
                                                                </div>
                                                                <p className="text-[30px] font-bold text-center my-2">{projects.filter((p) => new Date(p.createdAt).getMonth() === new Date().getMonth()).length}</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="p-3">
                                                <div className="border-b-2">
                                                        <p className='text-[#2D2D2D]  font-bold '>Edited Plans</p>
                                                </div>
                                                <div>
                                                        {projects.length === 0 ? (
                                                                <div className='w-full flex items-center justify-center my-2'>
                                                                        <p className="text-2xl text-gray-700">No projects so far</p>
                                                                </div>
                                                        ) : (
                                                                <table className='w-full mt-4'>
                                                                        <thead>
                                                                                <tr>
                                                                                        <th className='text-left py-2'>ID</th>
                                                                                        <th className='text-left py-2'>Building Plan</th>
                                                                                        <th className='text-left py-2'>Price</th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                                {projects.map((project) => (
                                                                                        <tr key={project._id} className='border-b'>
                                                                                                <td className='py-2 w-[30%] '>{project._id}</td>
                                                                                                <td className='py-2'>{project.category.title}</td>
                                                                                                <td className='py-2'>${project.planPrice.toLocaleString()}</td>
                                                                                        </tr>
                                                                                ))}
                                                                        </tbody>
                                                                </table>
                                                        )}
                                                </div>
                                        </div>
                                        <div className="p-3">
                                                <div className="border-b-2">
                                                        <p className='text-[#005DFF]  font-bold '>Recent Upload activies</p>
                                                </div>
                                                <div>
                                                </div>
                                        </div>
                                </div>
                        )}
                </div>
        )
}

export default Dashboard