
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Sidebar from "./components/Sidebar"
import Notifications from "./pages/Notifications"
import Plan from "./pages/Plan"
import Users from "./pages/Users"
import CreatePlan from "./pages/CreatePlan"
import OnePlan from "./pages/OnePlan"
import CreateUser from "./pages/CreateUser"
import Gallery from "./pages/Gallery"
import FolderGallery from "./pages/FolderGallery"
import { useState } from "react"
import Chat from "./components/Chat"
import Messages from "./pages/Messages"
import NoSelChat from "./pages/NoSelChat"
import OneChat from "./pages/OneChat"
import { Toaster } from "react-hot-toast"
import CreateFolder from "./pages/CreateFolder"
import Main from "./components/Main"
function App() {
	return (
		<div className="w-screen h-screen">
			<Router>
				<Routes>
					<Route path="/" element={
						<Main />
					}>
						<Route path="/" element={<Dashboard />} />
						<Route path="/notifications" element={<Notifications />} />
						<Route path="/messages" element={<Messages />} >
							<Route path="/messages" element={<NoSelChat />} />
							<Route path="/messages/:id" element={<OneChat />} />
						</Route>
						<Route path="/plans" element={<Plan />} />
						<Route path="/plans/:id" element={<OnePlan />} />
						<Route path="/plans/create" element={<CreatePlan />} />
						<Route path="/users" element={<Users />} />
						<Route path="/users/create" element={<CreateUser />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/gallery/create" element={<CreateFolder />} />
						<Route path="/gallery/folders/:id" element={<FolderGallery />} />
					</Route>
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
			<Toaster />
		</div>
	)
}

export default App
