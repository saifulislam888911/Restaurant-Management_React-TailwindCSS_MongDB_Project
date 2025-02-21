import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import "./Featured.css";

import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="bg-fixed  text-white my-20 pt-8 featured-item">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From Our Menu"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center bg-slate-500/60 pt-12 pb-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>

        <div className="md:ml-10">
          <p>Aug 20, 2029</p>

          <p className="uppercase">Where can I get some?</p>

          <p>
            Imagine savoring a plate of Hainanese Chicken Rice, where tender,
            poached chicken lays atop aromatic, ginger-infused rice. This
            beloved dish from Singapore comes with three essential sauces: spicy
            chili, dark soy, and a refreshing garlic-ginger blend, each
            enhancing the flavors in unique ways. Paired with a clear,
            nourishing broth, every bite tells a story of comfort and tradition.
            It is more than just a meal; it is a culinary journey that delights
            the senses and warms the soul!
          </p>

          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
