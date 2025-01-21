import Sidebar from '../../components/Sidebar';
import PostForm from '../../components/PostForm';

const CreatePostPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="main-content">
        <h1 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
          <i className="fas fa-cog"></i>
          Posts
        </h1>
        <PostForm />
      </div>
    </div>
  );
};

export default CreatePostPage;
