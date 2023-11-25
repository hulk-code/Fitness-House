import { useLoaderData } from "react-router-dom";


const ReadMore = () => {
    const readaMoreData = useLoaderData();

    const { img, title, authorName, newsContent } = readaMoreData
    return (
        <div >
            <div className="flex items-center">
                <div className="avatar lg:mt-32 mb-5">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                    <div >
                        <h1 >{authorName}</h1>
                    </div>
                </div>
            </div>
            <div className="w-9/12 mx-auto" >
                <p className="text-2xl font-blod">{title}</p>
                <p>{newsContent}</p>
            </div>
        </div>
    );
};

export default ReadMore;