export default function NftCard({image, name, price, date, mediaType}) {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <img src={ mediaType=== "Video" ? "./image/videoImage.png" : image} className="row-span-1 w-[240px] h-[150px] hover:border-2"/>
            </div>
            <div className="grid grid-rows-3 h-16 pl-3 pr-3 mt-2">
                <p className="row-span-1 text-[12px]">{name}</p>
                <p className="row-span-1 text-[12px] text-right text-blue-800">{price}</p>
                <p className="row-span-1 text-[12px]">{date}</p>
            </div>
        </div>
    )
}