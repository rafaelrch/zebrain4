import { Blog } from "@/components/blog";
import { Case } from "@/components/cases";
import { Contact1 } from "@/components/contact";
import { CTA2 } from "@/components/cta";
import { FAQ2 } from "@/components/faq";
import { Feature4 } from "@/components/feature4";
import { Feature } from "@/components/features";
import { Feature2 } from "@/components/features2";
import { Feature3 } from "@/components/features3";
import { Footer1 } from "@/components/footer";
import { Hero } from "@/components/hero";

import { Testimonials } from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section id="hero" className="mt-20">
      <Hero />
      </section>

      <section id="case">
      <Case/>
      </section>

      <section id="feature">
      <Feature/>
      </section>

      <section id="feature2">
      <Feature2/>
      </section>

      <section id="feature3">
      <Feature3/>
      </section>

      <section id="feature4">
      <Feature4/>
      </section>

      <section id="testimonials">
      <Testimonials/>
      </section>

      <section id="blog">
      <Blog/>
      </section>

      <section id="cta">
      <CTA2/>
      </section>

      <section id="faq">
      <FAQ2/>
      </section>

      <section id="contato">
      <Contact1/>
      </section>

      <section id="footer">
      <Footer1/>
      </section>
    </div>
  );
}
