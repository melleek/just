import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../api/api";
import { BgPurple } from "../shared/ui/BgPurple";
import { CustomTabPanel } from "../shared/ui/Custom";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const post = [
  {
    id: 1,
    title: "Сроки изготовления",
    description:
      "Сроки пошива будут зависеть от объема Вашего заказа и сложности моделей. В среднем изготовление корпоративной продукции занимает 10 -18 рабочих дней с момента утверждения всех деталей. Если же Вам нужно - Вы можете согласовать такие условия со своими личным менеджером."
  },
  {
    id: 2,
    title: "Стоимость",
    description:
      "Стоимость производства брендированной продукции на заказ расчитывается индивидуально. Цена зависит от сложности работы, брендирования, материалов, тиража и срочности. Мы подберем для вас оптимальный вариант в соответствии с вашим бюджетом."
  },
  {
    id: 3,
    title: "Брендирование",
    description:
      "Стоимость производства брендированной продукции на заказ расчитывается индивидуально. Цена зависит от сложности работы, брендирования, материалов, тиража и срочности. Мы подберем для вас оптимальный вариант в соответствии с вашим бюджетом."
  }
];

export function AllProducts() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.todos.todos);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const subCategories =
    data.find((item) => item.id === "1")?.subCategories || [];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="flex flex-col items-start gap-[80px]">
      <BgPurple
        title="купить чашку с логотипом"
        desc="Стоимость производства брендированной продукции на заказ расчитывается индивидуально. Цена зависит от сложности работы, брендирования, материалов, тиража и срочности."
        img="src/assets/img/klipartz 2.png"
      />

      <Box sx={{ width: "100%", paddingX: "161px" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Все товары" {...a11yProps(0)} />
            <Tab label="Посты" {...a11yProps(1)} />
            <Tab label="Свитшоты" {...a11yProps(2)} />
            <Tab label="Футболки" {...a11yProps(3)} />
            <Tab label="Поло" {...a11yProps(4)} />
            <Tab label="Жилетки" {...a11yProps(6)} />
            <Tab label="Рюкзаки" {...a11yProps(7)} />
            <Tab label="Бананки" {...a11yProps(8)} />
            <Tab label="Пледы " {...a11yProps(9)} />
            <Tab label="Носки" {...a11yProps(10)} />
            <Tab label="Маски" {...a11yProps(11)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <div className="py-[80px] flex flex-wrap justify-between gap-[80px] rounded-[15px] pt-[60px]">
            {subCategories.map((item) => (
              <Link
                to={item.to}
                key={item.id}
                className="rounded-[20px] gap-[20px] w-[377px] h-[400px] border-1px"
              >
                <img
                  className="w-[377px] h-[400px] rounded-[20px]"
                  src={item.img}
                  alt={item.subCategoryTitle}
                />
                <p className="text-center pt-[20px] text-[24px] ">
                  {item.subCategoryTitle}
                </p>
              </Link>
            ))}
          </div>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <div className="flex items-start gap-[133px] py-[80px]">
            {post.map((e) => (
              <h1
                className="text-[26px] font-[700] flex flex-col gap-[20px]"
                key={e.id}
              >
                {e.title}
                <p className="text-[14px] font-[400] tracking-[1px]">
                  {e.description}
                </p>
              </h1>
            ))}
          </div>
        </CustomTabPanel>
      </Box>
    </section>
  );
}
