import Navbar from "../component/navbar/Navbar";
import Container from "../component/Container";

const Blog = () => {
  return (
    <>
      <Container>
        <Navbar />
        <h1 className="text-neutral-100 max-sm:text-3xl md:text-4xl font-semibold max-sm:text-center md:w-8/12">
          Lets Talk About Programing, Bussiness, and Design
        </h1>
      </Container>
    </>
  );
};

export default Blog;
