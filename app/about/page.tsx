import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <div className="pt-14">
        <p className="leading-loose ">
          At Menu Wave, we&apos;ve revolutionized the way restaurants, cafes,
          and bars manage their menus. Our platform empowers you to create and
          customize your own menus effortlessly. Whether you&apos;re a small
          cafe or a bustling restaurant, Menu Wave simplifies the process of
          designing and managing your menu items, categories, and even their
          visibility. With a user-friendly dashboard designed for speed and
          ease, you can bring your menu ideas to life in just a few clicks.
        </p>
      </div>
    </div>
  );
}
