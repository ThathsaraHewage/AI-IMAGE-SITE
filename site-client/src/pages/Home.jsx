import React, { useState, useEffect } from "react";

import { FormField, Card, Loader } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#878787] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const { loading, setLoading } = useState(false);
  const { allPosts, selAllPosts } = useState(false);

  const [searchText, setSearchText] = useState("");

  return (
    <section className="max-w-7xl mx-auto ">
      {/* Title */}
      <div>
        <h1 className="font-extrabold text-white text-[40px]">
          The AI Image Community with DALL-E
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Browse through a collection of imaginative and visually stunning
          images generated by DALL-E AI
        </p>
      </div>

      {/* Search form field */}
      <div className="mt-16 text-white">
        <h6>Search Images</h6>
        <FormField
          type="text"
          name="text"
          placeholder="Search here..."
          value={searchText}
          handleChange={[]}
        />
      </div>

      {/* Loader */}
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing Resuls for{" "}
                <span className="text-[#222328]">{searchText}</span>:
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={[]} title="No Search Results Found" />
              ) : (
                <RenderCards data={[]} title="No Posts Yet" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
