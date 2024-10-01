import DeleteButton from "./DeleteButton";

export default function ItemCard({ data } ){
    return (
        <div className="item-card">
          <h2>{data.title}</h2>
          <a href={data.url} target="_blank" rel="noopener noreferrer">{data.url}</a>
          <DeleteButton onClick={() => onDelete(item.id)} />
        </div>
      );
}