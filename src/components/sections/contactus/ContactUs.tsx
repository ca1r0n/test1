import Container from "../../ui/container/Container";
import {Card} from "../../ui/card/Card";
import {TitleBox} from "../../ui/titie-box/TitleBox";
import {Button} from "../../ui/button/Button";
import {Input} from "../../ui/input/Input";
import {usContactForm} from "./hooks/useContactForm";
import {FormEvent} from "react";

export function ContactUs() {

    return <div id="contactus" className={"contact-us"}>
        <Container>
            <Card>
                <Form />
            </Card>
        </Container>
    </div>
}


function Form() {
    const {
        register,
        handleSubmit,
        errors,
        IsLoading,
        Status
    } = usContactForm()

    return <form
        onSubmit={handleSubmit}
        name={"contactus"}
        className={"contact-us__box"}
    >
        <TitleBox
            title={"Contact us"}
            subtitle={"Do you have any kind of help please contact with us."}
        />
        <Input
            placeholder={"Name"}
            error={errors["name"]}
            {...register("name")}
        />
        <Input
            placeholder={"Phone"}
            error={errors["phone"]}
            {...register("phone")}
        />
        <Input
            placeholder={"E-mail"}
            error={errors["email"]}
            {...register("email")}
        />
        <Button
            disabled={IsLoading || Status == "ok"}
            fullWidth={true}
            type={"submit"}
        >
            Send
        </Button>
        {Status == "error" && <p>TODO: вылезает notify что какая то ошибка(в дизайне нет)</p>}
    </form>
}
