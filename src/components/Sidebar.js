import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import tempMash from "../app/assets/images/tempMash.png"

const Sidebar = () => {
    return (
        <Container className="sidebar">
            <Row>
                <Col>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="mix-mash">Mix Mash</Link>
                        </li>
                        <li>
                            <Link to="account">Account</Link>
                        </li>
                        <li>
                            <Link to="about">About</Link>
                        </li>
                        <li>
                            <Link to="links">Links</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
            <img className="sidebar-mash" src={tempMash} />
        </Container>
    );
};

export default Sidebar;
