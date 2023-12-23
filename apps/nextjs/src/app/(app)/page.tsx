import { HomeIcon } from "@heroicons/react/24/outline";

import { Button } from "~/components/UI/Button";
import Card from "~/components/UI/Card";
import { CheckBox } from "~/components/UI/CheckBox";
import { IconButton } from "~/components/UI/IconButton";
import { InputField } from "~/components/UI/InputField";

export default function HomePage() {
  return (
    <main className="space-y-4">
      <div className="inline-flex space-x-4">
        <Button>Button</Button>
        <Button c="red" variant="rounded">
          Button
        </Button>
      </div>
      <Card variant="rounded">
        <p>Card</p>
      </Card>
      <div className="inline-flex space-x-4">
        <IconButton>
          <HomeIcon className="h-6 w-6" />
        </IconButton>
        <IconButton c="red" variant="rounded">
          <HomeIcon className="h-6 w-6" />
        </IconButton>
      </div>
      <div>
        <InputField placeholder="Text input" />
        <InputField
          type="password"
          placeholder="Password"
          variant="rounded"
          c="red"
        />
      </div>

      <CheckBox label="Checkbox" c="red" />
    </main>
  );
}
