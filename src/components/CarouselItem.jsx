import React from 'react';
import { connect } from 'react-redux'
import '../assets/styles/components/CarouselItem.scss'

import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'
import removeIcon from '../assets/static/remove-icon.png'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { setFavourite, deleteFavourite } from '../actions'
const CarousellItem = (props) => {
    const { id, cover, title, year, contentRating, duration, isList } = props;
    const handleSetFavourite = () => {
        props.setFavourite({
            id, cover, title, year, contentRating, duration
        })
    }
    const handleDeleteFavourite = (itemId) => {
        props.deleteFavourite(itemId)
    }
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    {isList ?
                        <img className="carousel-item__details--img" src={removeIcon} alt="Remove Icon" onClick={() => handleDeleteFavourite(id)} />
                        :
                        <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" onClick={handleSetFavourite} />

                    }
                    <Link to={`/player/${id}`}>
                        <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />

                    </Link>
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
            </div>
        </div>

    );
}


CarousellItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,

}
const mapDispatchToProps = {
    setFavourite,
    deleteFavourite
}

export default connect(null, mapDispatchToProps)(CarousellItem)


