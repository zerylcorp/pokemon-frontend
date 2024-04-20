import React, { useEffect, useState } from "react";
import DetailsPokemon from "../../components/Details";
import { useDispatch, useSelector } from "react-redux";
import { detailsPokemon } from "../../store/actions/pokemon.action";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [openToast, setOpenToast] = useState(false);

  const { selected } = useSelector((state) => state.pokemonReducer);
  useEffect(() => {
    dispatch(detailsPokemon(id));
  }, [dispatch, id]);
  return (
    <div>
      {openToast && <ToastContainer />}
      <DetailsPokemon
        species={selected.species}
        id={selected.id}
        image={`${selected?.imageUrl}`}
        title={`${selected?.name}`}
        heightDesc={`Height: ${selected.height}`}
        weightDesc={`Weight: ${selected.weight}`}
        setOpenToast={setOpenToast}
      />
    </div>
  );
};

export default Details;
