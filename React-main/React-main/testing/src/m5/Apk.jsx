

function apk({ name, Benar }) {
    return (
        <li>
            {Benar
            ? name + " true"
            : name == "taqy"
            ? "my name is " + name
            : name + " false"}
        </li>
    )
}