import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';

function InfoComponent({ recipeData }) {
    const { title, time, servings } = recipeData;
    return (
      <div style={{ minWidth: 300, flex: 1 }}>
        <Card
          sx={{
            borderRadius: 4,
            boxShadow: 3,
            background: "#f8f9fa",
            minHeight: 180,
          }}
        >
          <CardHeader
            title={title}
            titleTypographyProps={{
              fontSize: "1.4rem",
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif",
              color: "#22223b",
            }}
            sx={{ pb: 0 }}
          />
          <CardContent>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
              <AccessTimeIcon sx={{ color: "#4a4e69" }} />
              <span style={{ fontSize: "1.1rem", color: "#4a4e69" }}>{time}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <PeopleIcon sx={{ color: "#4a4e69" }} />
              <span style={{ fontSize: "1.1rem", color: "#4a4e69" }}>{servings}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}

InfoComponent.propTypes = {
    recipeData: PropTypes.object.isRequired,
};

export default InfoComponent;