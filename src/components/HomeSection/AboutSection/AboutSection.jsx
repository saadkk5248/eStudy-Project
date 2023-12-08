import React from "react";
import AboutImg from "../../../assets/about.svg";
import Button from "../../../layout/Button";
import { Link } from "react-scroll";

export function AboutSection() {
  return (
    <div>
      <div>
        <img src={AboutImg} />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.syeyyg numquam
          at nihil iure eum maxime voluptatibus recusandae! wuhgny
        </p>
        <Link to="/about">
          <Button title="Contact us" />
        </Link>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque atque
          voluptatem ipsum natus odio doloremque perspiciatis consectetur
          tempore molestiae esse?
        </p>
      </div>
    </div>
  );
}
