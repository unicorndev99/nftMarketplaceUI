export default function NftCard({image, name, price, date}) {
    console.log("1")
    return (
        <div className="grid grid-rows-2">
            <img src={image} className="row-span-1 rounded-[20px] w-[240px] h-[200px] hover:border-2 hover:border-blue-800"/>
            <div className="grid grid-rows-3 h-16 m-2">
                <h1 className="row-span-1 text-[18px]">{name}</h1>
                <div className="row-span-1 text-[18px] text-right text-blue-800">{price}</div>
                <div className="row-span-1 text-[18px]">{date}</div>
            </div>
        </div>
    )

}