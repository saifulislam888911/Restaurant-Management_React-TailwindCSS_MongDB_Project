const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center md:w-4/12 mx-auto my-8">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>

      <h3 className="uppercase text-3xl border-y-4 border-gray-200 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
