/**
 * Copyright (c) Kindlenext Authors
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button } from "@kindlenext/ui";
import { useIsomorphicLayoutEffect } from "@kindlenext/utils";

export default function InteriorDesigner() {
  useIsomorphicLayoutEffect(() => {
    console.log("Kindlenext Interior Designer Page");
  }, []);
  return (
    <div>
      <h1>Kindlenext Interior Designer</h1>
      <Button>Click me</Button>
    </div>
  );
}
