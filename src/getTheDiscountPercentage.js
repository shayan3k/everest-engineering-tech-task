function getTheDiscountPercentage({
  pkg_weight_in_kg,
  distance_in_km,
  offer_code,
}) {
  // return discount percentage based on the inputs
  if (
    offer_code == "OFR001" &&
    distance_in_km <= 200 &&
    pkg_weight_in_kg >= 70 &&
    pkg_weight_in_kg <= 200
  ) {
    return 10;
  } else if (
    offer_code == "OFR002" &&
    distance_in_km >= 50 &&
    distance_in_km <= 150 &&
    pkg_weight_in_kg >= 100 &&
    pkg_weight_in_kg <= 250
  ) {
    return 7;
  } else if (
    offer_code == "OFR003" &&
    distance_in_km >= 50 &&
    distance_in_km <= 250 &&
    pkg_weight_in_kg >= 10 &&
    pkg_weight_in_kg <= 150
  ) {
    return 5;
  } else return 0;
}

// export functions
module.exports = { getTheDiscountPercentage };
