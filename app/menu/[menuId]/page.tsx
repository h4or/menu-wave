import Base64Image from "@/components/Base64Image";
import { title } from "@/components/primitives";
import { getMenuCategories } from "@/data-access/categories";
import { getCategoryItems } from "@/data-access/items";
import { getMenuById } from "@/data-access/menus";
import Link from "next/link";
import ScrollUpButton from "./scrollUpButton";

export default async function MenuPage({
  params,
}: {
  params: {
    menuId: string;
  };
}) {
  const menu = await getMenuById(params.menuId);
  if (!menu || menu.status !== "active") {
    // eslint-disable-next-line react/no-unescaped-entities
    return <div>Menu doesn't exist or isn't active yet</div>;
  }
  const categories = await getMenuCategories(menu.id);

  const categoryItems = async (categoryId: string) => {
    return await getCategoryItems(categoryId);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className={title()}>{menu.name}</h1>

      <div className="pt-10 flex gap-4">
        {categories.map((category) => (
          <Link href={`#${category.id}`} key={category.id}>
            <div className="flex flex-col items-center">
              <Base64Image base64String={category.icon} className="size-24" />
              <h2 className="text-xl">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className="pt-10">
        {categories.map(async (category) => (
          <div key={category.id} id={category.id}>
            <h2 className="text-3xl font-bold py-4 text-gray-600">
              {category.name}
            </h2>
            <ul>
              {await categoryItems(category.id).then((items) =>
                items.map((item) => (
                  <li key={item.id}>
                    <h3 className="text-3xl">{item.name}</h3>
                    <p className="font-thin">{item.description}</p>
                    <p className="font-bold text-lg">{item.price}</p>
                  </li>
                ))
              )}
            </ul>
          </div>
        ))}
      </div>

      <ScrollUpButton />
    </div>
  );
}
