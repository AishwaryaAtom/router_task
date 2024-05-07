import React from 'react'

export default function Subcription() {

    const data = [
      {
        title: "FREE",
        subtitle: "$0/month",
        description: [
          {
            sub: "Single User",
            icon: "fa-solid fa-check",
          },
          {
            sub: "50GB storage",
            icon: "fa-solid fa-check",
          },
          {
            sub: "Unlimited public projects",
            icon: "fa-solid fa-check",
          },
          { sub: "Comunity access", icon: "fa-solid fa-check" },
          {
            sub: "Unlimited Private projects",
            icon: "fa-solid fa-xmark",
            class: "text-color",
            style: { color: "#aeb1b7" },
          },
          {
            sub: "Dedicated phone support",
            icon: "fa-solid fa-xmark",
            class: "text-color",
            style: { color: "#aeb1b7" },
          },
          {
            sub: "Free subdomain",
            icon: "fa-solid fa-xmark",
            class: "text-color",
            style: { color: "#aeb1b7" },
          },
          {
            sub: "Monthly status report",
            icon: "fa-solid fa-xmark",
            class: "text-color",
            style: { color: "#aeb1b7" },
          },
        ],
        button: "disabled",
      },
      {
        title: "PLUS",
        subtitle: "$9/month",
        description: [
          {
            sub: "Single User",
            icon: "fa-solid fa-check",
          },
          { sub: "50GB storage", icon: "fa-solid fa-check" },
          {
            sub: "Unlimited public projects",
            icon: "fa-solid fa-check",
          },
          { sub: "Comunity access", icon: "fa-solid fa-check" },
          {
            sub: "Unlimited Private projects",
            icon: "fa-solid fa-check",
          },
          {
            sub: "Dedicated phone support",
            icon: "fa-solid fa-check",
          },
          { sub: "Free subdomain", icon: "fa-solid fa-check" },
          {
            sub: "Monthly status report",
            icon: "fa-solid fa-xmark",
            class: "text-color",
            style: { color: "#aeb1b7" },
          },
        ],
        button: "disabled",
      },
      {
        title: "PRO",
        subtitle: "$49/month",
        description: [
          {
            sub: "Single User",
            icon: "fa-solid fa-check",
          },
          { sub: "50GB storage", icon: "fa-solid fa-check" },
          {
            sub: "Unlimited public projects",
            icon: "fa-solid fa-check",
          },
          { sub: "Comunity access", icon: "fa-solid fa-check" },
          {
            sub: "Unlimited Private projects",
            icon: "fa-solid fa-check",
          },
          {
            sub: "Dedicated phone support",
            icon: "fa-solid fa-check",
          },
          { sub: "Free subdomain", icon: "fa-solid fa-check" },
          {
            sub: "Monthly status report",
            icon: "fa-solid fa-check",
          },
        ],
   
      },
    ];
    return (
      //   <div className="container">
      <div className="main-bg">
        <div className="d-flex justify-content-between p-3">
          {data?.map((list, i) => (
            <>
              <div className="col-md-4 content me-2 p-3" key={"idx" + i}>
                <div className="text-center border-btm">
                  <h1 className="title">{list.title}</h1>
                  <h2 className="sub-title">{list.subtitle}</h2>
                </div>
                {list?.description?.map((desc, i) => (
                  <>
                    <div className="d-flex align-items-center">
                      <p className={"me-2"}>
                        {" "}
                        <i className={desc.icon} style={desc?.style}></i>
                      </p>

                      <p className={desc?.class}>{desc.sub}</p>
                    </div>
                  </>
                ))}
                <button
                  className={
                    list?.button ? "btn-primary disabled-button" : "btn-primary"
                  }
                >
                  BUTTON
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
      //   </div>
    );
}
