import Feed from "@components/jobs";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Filter, Apply &amp; Share&nbsp;
        <br className="max-xs:hidden" />
        <span className="orange_gradient text-center">
          ACME Developers Job Board
        </span>
      </h1>
      <p className="desc text-center">
        Do you want to find a good developer job? Find, filter, share and easily
        apply to jobs tailored for developers only. You can save more than one
        resume which will enable you to easily apply to job using the perfect
        resume that match the job description.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
