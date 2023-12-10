/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useFirebase from "../../../../hooks/useFirebase";
import img from "../../../../images/pro.png";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";
import { useForm } from "react-hook-form";
// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const EditProfile = () => {
  const { user } = useFirebase();
  const { mutate } = useSWRConfig();
  const [countries, setCountries] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [imageURL, setImageURL] = useState("");

  const { data } = useSWR(`http://localhost:8000/user/${user.email}`, fetcher);
  console.log(data?.imageLink);

  // Img upload functionality
  const handleImageUpload = async e => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    try {
      // Use ImgBB API to upload the image
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=573a29fff78ba91d05a36baad90b31d9",
        formData
      );
      // Get the uploaded image URL
      setImageURL(response.data.data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // State to store the uploaded
  const onSubmit = data => {
    data.imageLink = imageURL;

    // console.log(data);

    axios
      .post(`http://localhost:8000/edit-user/${user.email}`, data)
      .then(() => {
        // here use useSWR methods
        reset();
        setImageURL("");
        mutate(`http://localhost:8000/user/${user.email}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // country api call
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        const countryData = response.data;
        setCountries(countryData);
      })
      .catch(error => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div className="bg-white ">
      <h4 className="text-center bg-blue text-white p-3">Edit Profile</h4>
      {/* edit form */}
      <div className="p-10">
        <h6 className="text-xl">Personal Information : </h6>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* img upload  */}
          <div className="lg:flex justify-between my-6 items-center">
            {imageURL || data?.imageLink ? (
              <img src={imageURL || data?.imageLink} alt="userImg" className="w-32" />
            ) : (
              <div className="text-center ">
                <FaUserCircle className="text-8xl " />
                <span>User Img</span>
              </div>
            )}
            <div className="border-2 rounded-lg lg:p-10 flex gap-6 p-5 mt-10 lg:mt-0">
              <input
                onChange={handleImageUpload}
                type="file"
                className="file-input file-input-bordered "
              />
              {/* <div className="btn flex items-center bg-offBlue text-blue">
                <FaUpload /> Upload
              </div> */}
            </div>
          </div>
          {/* Basic info edit */}
          <div className="mt-20">
            {/* First or last name */}
            <div className="lg:flex gap-10">
              <div className="w-full">
                <label> First Name</label> <br />
                <input
                  type="text"
                  {...register("firstName")}
                  placeholder="first name"
                  className="input input-bordered w-full mt-3"
                />
              </div>
              <div className="w-full lg:mt-0 mt-5">
                <label> Last Name</label> <br />
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="last name"
                  className="input input-bordered w-full mt-3"
                />
              </div>
            </div>
            {/* email & gender */}
            <div className="lg:flex gap-10 mt-8">
              <div className="w-full">
                <label> Email</label> <br />
                <input
                  type="email"
                  defaultValue={user?.email}
                  disabled
                  className="input input-bordered w-full mt-3"
                />
              </div>
              <div className="w-full lg:mt-0 mt-5">
                <label>Gender</label> <br />
                <select {...register("gender")} className="select select-bordered w-full mt-3">
                  <option disabled>Gender select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            {/* Phone number */}
            <div className="lg:flex gap-10 mt-8">
              <div className="w-full">
                <label> Phone No</label> <br />
                <input
                  {...register("phoneNo")}
                  type="number"
                  placeholder="phone number"
                  className="input input-bordered w-full mt-3"
                />
              </div>
              <div className="w-full lg:mt-0 mt-5">
                <label>Alternative No</label> <br />
                <input
                  {...register("alternativeNo")}
                  type="number"
                  placeholder="alternative no"
                  className="input input-bordered w-full mt-3"
                />
              </div>
            </div>
            {/* Address */}
            <div className="lg:flex gap-4 mt-8">
              <div className="w-full">
                <label> Country</label> <br />
                <select
                  {...register("country")}
                  id="countrySelect"
                  className="select select-bordered mt-2 w-full"
                >
                  <option value="">Select a country</option>
                  {countries.map(country => (
                    <option key={country.cca2} value={country.cca2}>
                      {country.name.common}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label> City</label> <br />
                <input
                  {...register("city")}
                  type="text"
                  placeholder="city name"
                  className="input input-bordered w-full mt-3"
                />
              </div>
              <div className="w-full lg:mt-0 mt-5">
                <label>Address</label> <br />
                <input
                  {...register("address")}
                  type="text"
                  placeholder="full address"
                  className="input input-bordered w-full mt-3"
                />
              </div>
            </div>

            <div className="mt-16">
              <button type="submit" className=" btn bg-blue text-white">
                Save Information
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
