import { Link } from 'react-router-dom';

type DetailButtonProps = {
  id: number;
  title: string;
};

const DetailButton: React.FC<DetailButtonProps> = ({ id, title }) => {
  return (
    <Link
      to={`/${title.replace(/\s+/g, '-').toLowerCase()}/${id}`}
      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-200"
    >
      Detail
    </Link>
  );
};

export default DetailButton;
