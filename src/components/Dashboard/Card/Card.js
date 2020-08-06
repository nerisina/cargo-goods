import React, { Component } from "react";

class Card extends Component {
 
  render() {

    const destination = this.props.destination.split(',').map((line,index) => <span key={index}>{line},<br/></span>);
    const origin = this.props.origin.split(',').map((line,index) => <span key={index}>{line}<br/></span>);
    const{client, id, etd, eta, mode, status} = this.props;

    return (
      <div className="mb5 card__holder bg-white">
        <h4 className="pl4 pr4">Shipment Information</h4>
        <dl className="f6 lh-title pl4 pr4">
            <dt className="ml0 b pb2">Track ID</dt>
            <dd className="ml0 gray">{id}</dd>
          </dl>
        <div className="flex pl4 pr4 justify-between">
          <dl className="f6 lh-title">
            <dt className="ml0 b pb2">Client</dt>
            <dd className="ml0 gray">{client}</dd>
          </dl>
          <dl className="f6 lh-title">
            <dt className="ml0 b pb2">Status </dt>
            <dd className="ml0 gray">{status}</dd>
          </dl>
          <dl className="f6 lh-title">
            <dt className="b pb2">Transportation</dt>
            <dd className="ml0 gray pb2">{mode} </dd>
          </dl>
        </div>

        <div className="flex pl4 pr4 justify-between">
          <dl className="f6 lh-title">
            <dt className="b pb2">Origin: </dt>
            <dd className="ml0 gray pb2">{origin}</dd>
            <dt className="b pb2">ETD: </dt>
            <dd className="ml0 gray pb2">{etd}</dd>
          </dl>
          <dl className="f6 lh-title">
            <dt className="b pb2">Destination: </dt>
            <dd className="ml0 gray pb2">{destination}</dd>
            <dt className="b pb2">ETA: </dt>
            <dd className="ml0 gray pb2">{eta}</dd>
          </dl>
        </div>

        <div className="flex pl4 pr4 justify-between">
          <dl className="f6 lh-title">
            <dt className="b pb2">ETD: </dt>
            <dd className="ml0 gray pb2">{etd}</dd>
          </dl>
          <dl className="f6 lh-title">
              <dt className="b pb2">ETA: </dt>
            <dd className="ml0 gray pb2">{eta}</dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default Card;
