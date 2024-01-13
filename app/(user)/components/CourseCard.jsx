"use client";

import React, { useState } from "react";
import { ArrowRight } from "react-feather";
import Link from "next/link";
import { Modal } from "antd";

function CourseCard({ imageUrl, title, description, href }) {
  const [isEnrolling, setIsEnrolling] = useState(false);

  const handleEnroll = () => {
    setIsEnrolling(true);
  };

  const handleCancel = () => {
    setIsEnrolling(false);
  };

  return (
    <div className="bg-[#1e1f22] flex flex-col lg:flex-row p-5 mb-5 rounded-xl shadow-xl ">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-96 h-56 rounded-xl">
          <img
            className="object-cover rounded-xl w-full h-full"
            src={imageUrl}
          />
        </div>
        <div className="flex flex-col justify-around mx-0 lg:mx-10 mt-5 lg:mt-0 w-full">
          <div className="flex flex-col">
            <div className="text-white font-normal text-3xl">{title}</div>
            <div className="text-[#787b7e] mt-4">{description}</div>
          </div>

          <div className="flex flex-row mt-4 justify-between items-center">
            <div className="flex flex-row">
              <div className="bg-[#28292c] rounded-md flex justify-center items-center p-3">
                <h1 className="text-white ">UI/UX</h1>
              </div>
            </div>

            <div
              className="bg-[#1d4ed8] text-white rounded-md px-4 py-3 ml-auto hover:cursor-pointer"
              onClick={handleEnroll}
            >
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Enroll in Course"
        open={isEnrolling}
        onCancel={handleCancel}
        footer={null}
        centered // Add the centered prop
      >
        <p>Are you sure you want to enroll in this course?</p>
        <div className="flex justify-end mt-4">
          <Link
            href={href}
            className="bg-[#1d4ed8] text-white rounded-md px-4 py-2 mr-2"
          >
            Enroll
          </Link>
          <button className="bg-[#787b7e] text-white rounded-md px-4 py-2">
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default CourseCard;
