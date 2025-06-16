import '@fontsource/poppins';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';

function IngredientsComponent({ recipeData }) {
  const ingredients = recipeData.steps.map((step) => step.ingredients).flat();

  return (
    <div style={{ minWidth: 320, flex: 1 }}>
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: 3,
          background: "#f8f9fa",
          minHeight: 180,
        }}
      >
        <CardHeader
          title="Ingredients"
          titleTypographyProps={{
            fontSize: "1.3rem",
            fontWeight: 600,
            fontFamily: "'Poppins', sans-serif",
            color: "#22223b",
          }}
          sx={{ pb: 0 }}
        />
        <CardContent>
          <List dense>
            {ingredients.map((ingredient, index) => (
              <ListItem
                key={index}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.05rem",
                  color: "#4a4e69",
                  py: 0.5,
                }}
              >
                <Checkbox
                  sx={{ color: "#4a4e69", p: 0, mr: 1 }}
                  size="small"
                />
                {ingredient.quantity} {ingredient.name}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}

export default IngredientsComponent;