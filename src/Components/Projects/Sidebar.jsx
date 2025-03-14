import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import ProjectsData from '../Data/ProjectsData';

const Sidebar = ({ toggleHandle }) => {
  const navigate = useNavigate();
  const { sidebarToggle, setSidebarToggle } = toggleHandle;

  return (
    <div className="h-full w-60 bg-gray-800 rounded p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg">Projects</h2>
        <div className="lg:hidden">
          <X
            onClick={() => setSidebarToggle(false)}
            color="white"
            className="cursor-pointer"
            aria-label="Close Sidebar"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <button
          onClick={() => {
            navigate('/projects', { replace: true });
            setSidebarToggle(false);
          }}
          className="p-2 text-sm text-start rounded text-gray-300 hover:text-white"
        >
          All Projects
        </button>
        {ProjectsData.map((project) => (
          <button
            key={project.id}
            onClick={() => {
              navigate(`/projects/${project.id}`, { replace: true });
              setSidebarToggle(false);
            }}
            className="p-2 text-sm rounded text-start text-gray-500 hover:text-white"
          >
            {project.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;