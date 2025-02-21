import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  /*
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(
          (items) => items.category === "popular"
        );

        setMenu(popularItems);
      });
  }, []);
  */

  const [menu] = useMenu();
  //console.log(menu);

  const popular = menu.filter((item) => item.category === "popular");
  //console.log(popular);

  return (
    <section className="flex flex-col items-center mb-12">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From Our Menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <button className="btn btn-outline border-0 border-b-4 mt-4">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
