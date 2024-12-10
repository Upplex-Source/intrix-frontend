import React from "react";
import "./review-card.scss";
import Image from "next/image";

function ReviewCard({ item }) {
    const CardOne = () => (
        <div className="card-1">
            <div className="top">
                {new Array(item.rating).map((count) => (
                    <div>rating {count}</div>
                ))}
            </div>
            <div className="middle">
                <p>{item.comment}</p>
            </div>
            <div className="bottom">
                <p>{item.user}</p>
            </div>
        </div>
    );
    const CardTwo = () => (
        <div className="card-2">
            <div className="left">
                <div className="top">
                    {new Array(item.rating).map((count) => (
                        <div>rating {count}</div>
                    ))}
                </div>
                <div className="bottom">
                    <p>{item.user}</p>
                </div>
            </div>
            <div className="right">
                <Image src={item.video} alt="" />
            </div>
        </div>
    );
    const CardThree = () => (
        <div className="card-3">
            <div className="left">
                <div className="top">
                    {new Array(item.rating).map((count) => (
                        <div>rating {count}</div>
                    ))}
                </div>
                <div className="middle">
                    <p>{item.comment}</p>
                </div>
                <div className="bottom">
                    <p>{item.user}</p>
                </div>
            </div>

            <div className="right">
                <Image src={item.image} alt="" />
            </div>
        </div>
    );

    function renderCardType() {
        switch (item.type) {
            case 2: // left star, right video
                return <CardOne />;
            case 3: // left top star, left bottom comment, right image
                return <CardTwo />;
            default: // top star, bottom comment
                return <CardThree />;
        }
    }

    return <div id="review-card-container">{renderCardType()}</div>;
}

export default ReviewCard;
