import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormGroup,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const ingredients = [
  {
    category: "Nuts & seeds",
    ingredient: ["Cashews"],
  },

  {
    category: "Protein",
    ingredient: ["GroundBeef", "Bacon strips"],
  },
];

function MenuCard() {
  const handleCheckBoxChange = () => {
    console.log("value");
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg: flex items-center lg:mr-10">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
              alt=""
            />
          </div>
          <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
            <p className="font-semibold text-xl">Burger</p>
            <p>$5</p>
            <p className="text-grey-400">nice food</p>
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails>
        <form>
          <div className="flex gap=5 flex-wrap">
            {ingredients.map((item) => (
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredient.map((item) => (
                    <FormControlLabel
                      control={
                        <Checkbox onChange={() => handleCheckBoxChange(item)} />
                      }
                      label={item}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>

          <div className="pt-5">
            <Button variant="contained" disabled={false} type="submit">
              {true ? "Add to cart" : "Out of stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}

export default MenuCard;
