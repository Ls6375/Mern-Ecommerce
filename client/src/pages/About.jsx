import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import Newsletter from '@src/components/Newsletter';

function About() {
  return (
    <div>
      {/* About Us Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to FOREVER, your ultimate destination for trendy,
            high-quality clothing designed to elevate your style. Our curated
            collections cater to diverse tastes and preferences, ensuring that
            you always find something to love.
          </p>
          <p>
            At FOREVER, we believe that fashion is more than just
            clothing – it’s an expression of individuality and confidence. With
            a focus on quality fabrics, timeless designs, and affordable
            pricing, we strive to bring you pieces that blend style with
            comfort.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to make fashion accessible to everyone, empowering
            individuals to embrace their uniqueness through their wardrobe. We
            are committed to sustainability, ethical practices, and creating a
            positive impact in the fashion industry. From casual wear to
            statement pieces, our goal is to help you look and feel your best
            every day.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            We go the extra mile to ensure that every piece of clothing meets
            the highest standards. From fabric selection to stitching, our
            products are crafted with care and precision to deliver exceptional
            quality.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>
            Shopping with us is designed to be effortless. Our intuitive website
            layout, fast shipping options, and hassle-free return policy make it
            simple to find and purchase the clothing you love. Whether you're
            looking for a quick update to your wardrobe or planning for a
            special occasion, we've got you covered.
          </p>
          <p>
            Additionally, we offer detailed size guides and product descriptions
            to help you make informed decisions. Our customer support team is
            always ready to assist with any inquiries, ensuring that your
            experience is smooth and enjoyable from start to finish.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>
            At FOREVER, our customers are our top priority. We pride
            ourselves on delivering a personalized shopping experience, whether
            you're browsing online or reaching out for support. Our dedicated
            team is here to ensure that your needs are met and that every
            interaction leaves you satisfied.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

export default About;
