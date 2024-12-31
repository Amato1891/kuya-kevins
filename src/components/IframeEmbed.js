import React from 'react';

const IframeEmbed = () => {

  return (<>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="ff-secondary text-center text-warning fw-normal">Read About Us</h1>
          <div className="iframe-container">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcltampabay%2Fposts%2Fpfbid0RdxMEExb9zJHLDaMtDxVqSK4CH3iXeTFpSbjsRLhVDyHFHKAzH4o3kgVCBUVd4kvl&show_text=true&width=500"
        className="responsive-iframe"
        frameBorder="0"
        allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default IframeEmbed;
