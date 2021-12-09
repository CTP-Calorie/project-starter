import React, {Component} from 'react';
import './sidebar.scss';

class Sidebar extends Component {

    state = {
        selectedPlace: 0
    }

    // Show All Reviews
    updateSelectedPlace = (modal, index) => {

        if(modal === 'all-reviews') {
            this.setState({
                selectedPlace: index
            }, this.toggleModal)
        } else if(modal === 'add-review') {
            this.setState({
                selectedPlace: index
            }, this.showAddReviewModal)
        }
    }

    toggleModal = () => {
        let allReviewsModal = document.querySelector('#all-reviews');
        allReviewsModal.classList.toggle('open');
    }



    hideAddReviewModal = () => {
        let addReviewModal = document.querySelector('#add-review');
        addReviewModal.classList.remove('open');
    }

    addReview = () => {
        
        // User Input
        let reviewUser = document.querySelector('#review-user');
        let reviewText = document.querySelector('#review-text');
        let reviewRate = document.querySelector('#review-rate');
   

        // Hide Modal
        this.hideAddReviewModal();

        // Reset Fields
        this.resetInputFields([reviewUser, reviewText, reviewRate]);
    }

    // Add Place
    showAddPlaceModal = () => {
        let addPlaceModal = document.querySelector('#add-place');
        addPlaceModal.classList.add('open');
    }

    hideAddPlaceModal = () => {
        let addPlaceModal = document.querySelector('#add-place');
        addPlaceModal.classList.remove('open');
    }

    addPlace = () => {

        // User Input
        let placeName = document.querySelector('#place-name');
        let placeAddress = document.querySelector('#place-address');
        let placePhone = document.querySelector('#place-phone');
        let placeLat = document.querySelector('#place-latitude');
        let placeLng = document.querySelector('#place-longitude');
        let placeRate = document.querySelector('#place-rate');
        console.log(`Place Lat: `, placeLat.value);
        console.log(`Place Lng: `, placeLng.value);

        // Add Place
        let place = {
            name: placeName.value,
            formatted_address: placeAddress.value,
            formatted_phone_number: placePhone.value,
            rating: placeRate.value,
            user_ratings_total: 0,
            reviews: [],
            lat: Number(placeLat.value),
            lng: Number(placeLng.value)
        }

        this.props.addPlace(place);

        // Hide Modal
        this.hideAddPlaceModal();

        // Reset Fields
        this.resetInputFields([placeName, placeAddress, placePhone, placeRate, placeLat, placeLng]);
    }

    // Reset Input Fields
    resetInputFields = (inputs) => {
        inputs.map(input => {
            input.value = '';
        })
    }

    // Convert UNIX Timestamp
    convertTime = (time) => {
        return new Date(time * 1000).toISOString().slice(0, 19).replace('T', ' ');
    }

    render() {

        let {placesDetails, handleSort} = this.props;

        return (
            <div className="sidebar">
                <div className="options">
                  
                </div>
                <div className="places">
                    {
                        placesDetails.map((place, index) => (
                            <div className="place" key={index}>
                                <img src={place.photos ? place.photos[0].getUrl({maxWidth: 300, maxHeight: 300}) : 'https://via.placeholder.com/300'} alt={place.name} />
                                <div className="details">
                                    <h2 className="name">{place.name}</h2>
                                    <div className="review">
                                        <ul className={'stars rate-' + Math.round(place.rating)}>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                        <strong>{Math.round(place.rating)}</strong>
                                        <span className="all-reviews" onClick={() => this.updateSelectedPlace('all-reviews', index)}>({place.user_ratings_total})</span> 
                               
                                    </div>
                                    <ul className="info">
                                        <li><i className="fas fa-phone-alt"></i><a href={'tel:' + place.formatted_phone_number}>{place.formatted_phone_number}</a></li>
                                        <li><i className="fas fa-map-marker-alt"></i> {place.formatted_address}</li>
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>


                <div className="modal reviews" id="all-reviews">
                    <div className="inner">
                        <div className="close" onClick={this.toggleModal}>X</div>
                        <div className="review-list">
                            {placesDetails[0] ? placesDetails[this.state.selectedPlace].reviews.map(review => (
                                <div className="review">
                                    <div className="author">
                                        <img 
                                            src={review.profile_photo_url} 
                                            alt={review.author_name}
                                            title={review.author_name}
                                            className="author-thumbnail"
                                        />
                                        <ul className="author-info">
                                            <li>
                                                {review.author_url ? (
                                                    <a href={review.author_url} target="_blank">{review.author_name}</a>
                                                )
                                                : (
                                                    <span>{review.author_name}</span>
                                                )}
                                            </li>
                                            <li>
                                                <ul className={'stars rate-' + Math.round(review.rating)}>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                </ul>
                                                <time>{this.convertTime(review.time)}</time>
                                            </li>
                                        </ul>
                                    </div>
                                    <p class="text">{review.text}</p>
                                </div>
                            )) : (<div>Nothing!</div>)}
                        </div>
                    </div>
                </div>
            
                <div className="modal add-review" id="add-review">
                    <div className="inner">
                        <div className="close" onClick={this.hideAddReviewModal}>X</div>
                        <form action="" onSubmit={e => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="review-user">Full Name</label>
                                <input type="text" id="review-user" placeholder="Ex. John Doe" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="review-rate">Rating</label>
                                <select id="review-rate" required>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="review-text">Review</label>
                                <textarea id="review-text" cols="30" rows="10" placeholder="Write your review..." required></textarea>
                            </div>
                          
                        </form>
                    </div>
                </div>
    
            </div>
        )
    }
}

export default Sidebar;