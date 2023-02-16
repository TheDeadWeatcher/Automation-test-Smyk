import GlobalPage from "../../pages/GlobalPage";
import TopNavPage from "../../pages/components/TopNavPage";
import { smykHomeUrl } from "../../config/pagesUrl";

describe("E2E - top navigation", async () => {
  it("Should open home page smyk.com and vefiry Url", async () => {
    await GlobalPage.openPage(smykHomeUrl, smykHomeUrl);
  });
  it("Should verify all topNav links", async () => {
    await TopNavPage.topNavLinkIsVisible();
  });
});