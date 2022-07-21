import React from "react";
import { MultiStepForm, Step } from "react-multi-form";
import Register from "../components/Register";
import { Button } from "react-bootstrap";
import Hello from "../components/Hello";



const Signup = () => {
	const [active, setActive] = React.useState(1);
	return (
		<React.Fragment className="bg-black">
			
			<div className="p-5 d-flex justify-content-center">
                <div className="card p-5 m-5 bg-dark" style={{width: 45 + 'rem', height: 50 + 'rem'}}>

                <MultiStepForm activeStep={active} accentColor="red">
                        <Step label="Hello">
							<Hello />
						</Step>
						<Step label="Login">
							<Register />
						</Step>
					</MultiStepForm>


                    <div className="d-flex justify-content-end">
                    {active !== 1 && (
						<Button
							outline
							variant="danger"
							onClick={() => setActive(active - 1)}
                            className="m-1"
						>
							Previous
						</Button>
					)}
					{active !== 2 && (
						<Button
							outline
							variant="danger"
							onClick={() => setActive(active + 1)}
							style={{ float: "right" }}
                            className="m-1"
						>
							Next
						</Button>
					)}
                    </div>

					
                </div>
				
				

				
			</div>
		</React.Fragment>
	);
};

export default Signup ;
