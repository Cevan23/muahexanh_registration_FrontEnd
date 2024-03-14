import { Link } from "react-router-dom";

export const ProjectItem = ({ activity }) => {
  return (
    <tr className="odd:bg-white even:bg-gray-50 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrape"
      >
        {activity.title}
      </th>
      <td className="px-6 py-4">{activity.date.toDateString()}</td>
      <td className="px-6 py-4">{activity.members}</td>
      <td className="px-6 py-4">{activity.Status}</td>
      <td className="px-6 py-4">
        <Link to="/" className="font-medium text-blue-600 hover:underline">
          Edit
        </Link>
      </td>
    </tr>
  );
};
