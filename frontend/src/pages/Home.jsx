import CourseCards from '../components/home/CourseCards';
import NewsSection from '../components/home/NewSection';
import Partners from '../components/home/Partners';
import RegisterForm from '../components/ruta-net/RegisterForm';

const Home = () => {
  return (
    <div>
      <CourseCards />
      <NewsSection />
      <Partners />
      <RegisterForm />
    </div>
  );
};

export default Home;