//Permite definir los estados que van a ser variables del componente
import { useState } from "react";
export default function Grades() {
    //Definir los estados de este componente
    const [ident, setIdent] = useState('');
    const [fullname, setFullname] = useState('');
    const [course, setCourse] = useState('');
    const [qualify1, setQualify1] = useState('');
    const [qualify2, setQualify2] = useState('');
    const [qualify3, setQualify3] = useState('');
    const [final, setFinal] = useState('');
    const [observation, setObservation] = useState('');
    //metodos
    const handleSubmit = (event) => {
        event.preventDefault(); // No hace postback, es decir, no va al servidor a traer información
        // validar que todos los datos se hayan diligenciado
        if (ident != "" && fullname != "" && course != "" && qualify1 != "" && qualify2 != "" && qualify3 != "") {
            let definitiva = (parseFloat(qualify1) + parseFloat(qualify2) + parseFloat(qualify3)) / 3
            setFinal(definitiva.toFixed(1))
            let obs;
            if (definitiva >= 3) {
                obs = "Gana";
            }
            else if (definitiva < 2) {
                obs = "Pierde"
            }
            else {
                obs = "Habilita"
            }
            if (obs == "Habilita" && course == "ma") {
                obs = "Esta asignatura no se puede habilitar"
            }
            setObservation(obs);
        }
        else {
            alert("Debe ingresar todos los datos")
        }
    }
    function onClean(e){
        e.preventDefault();
        //Limpiar el contenido de los estados
        setIdent("");
        setFullname("");
        setCourse("");
        setQualify1("");
        setQualify2("");
        setQualify3("");
        setFinal("");
        setObservation("");
    }
    return (
        <div className="container">
            <h2>Calificaciones</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="ident">Identificación</label>
                        <input
                            type="text"
                            placeholder="Identificación"
                            id="ident"
                            name="ident"
                            className="form-control"
                            onChange={event => setIdent(event.target.value)}
                            value={ident}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="fullname">Nombre Completo</label>
                        <input
                            type="text"
                            placeholder="Nombre completo"
                            name="fullname"
                            id="fullname"
                            className="form-control"
                            onChange={e => setFullname(e.target.value)}
                            value={fullname}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="course">Asignatura</label>
                        <select
                            name="course"
                            id="course"
                            className="form-control"
                            value={course}
                            onChange={e => setCourse(e.target.value)}
                        >
                            <option value="" disabled>Seleccione una asignatura</option>
                            <option value="mv1">Móviles I</option>
                            <option value="w1">Web I</option>
                            <option value="ma">Metodologías Ágiles</option>
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="qualify1">Nota 1</label>
                        <input
                            type="text"
                            placeholder="Nota 1"
                            name="qualify1"
                            id="qualify1"
                            className="form-control"
                            onChange={e => setQualify1(e.target.value)}
                            value={qualify1}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="qualify2">Nota 2</label>
                        <input
                            type="text"
                            placeholder="Nota 2"
                            id="qualify2"
                            name="qualify2"
                            className="form-control"
                            onChange={event => setQualify2(event.target.value)}
                            value={qualify2}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="qualify3">Nota 3</label>
                        <input
                            type="text"
                            placeholder="Nota 3"
                            name="qualify3"
                            id="qualify3"
                            className="form-control"
                            onChange={e => setQualify3(e.target.value)}
                            value={qualify3}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="final">Definitva</label>
                        <input
                            type="text"
                            id="final"
                            name="final"
                            className="form-control"
                            value={final}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="observation">Observación</label>
                        <input
                            type="text"
                            name="observation"
                            id="observation"
                            className="form-control"
                            value={observation}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button
                            className="btn btn-success mt-2"
                            type="submit">
                            Calcular
                        </button>
                    </div>
                </div>
            </form>
            <form onSubmit={onClean} >
                <button className="btn btn-dark">Limpiar</button>
            </form>
        </div>
    );
}