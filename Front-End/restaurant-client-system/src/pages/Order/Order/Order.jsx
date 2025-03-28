import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// Files : Components : Order :
import OrderTab from "../OrderTab/OrderTab";
// Files : Components : Shared :
import Cover from "../../Shared/Cover/Cover";
// Files : hooks :
import useMenu from "../../../hooks/useMenu";
// Images :
import orderCoverImg from "../../../assets/shop/banner2.jpg";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  // console.log(category);
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  // const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Restaurant | Order Food</title>
      </Helmet>

      <Cover img={orderCoverImg} title={"Order Food"}></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
