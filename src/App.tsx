import {
  Group,
  ModalCard,
  Panel,
  PanelHeader,
  SimpleCell,
  View,
  FormLayout,
  FormItem,
  Input,
  Button,
  Search,
  Header,
  FormField,
  Div,
} from "@vkontakte/vkui";

export default function App() {
  return (
    <>
      <View activePanel="profile">
        <Panel id="profile">
          <PanelHeader>
            <Search />
          </PanelHeader>
          <Group>
            <SimpleCell>Hello</SimpleCell>
            <SimpleCell>world</SimpleCell>

            <Button>Login</Button>
          </Group>

          <Group>
            <FormLayout name={"login"}>
              <FormItem>
                <FormField>
                  <Input type={"email"} disabled={false} />
                </FormField>
              </FormItem>

              <FormItem>
                <Input type={"password"} />
              </FormItem>
            </FormLayout>
          </Group>
        </Panel>

        <Panel id={"tickets"}></Panel>
      </View>
    </>
  );
}
