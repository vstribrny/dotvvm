﻿using Riganti.Utils.Testing.SeleniumCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DotVVM.Samples.Tests.Control
{
    [TestClass]
    public class ButtonTests : SeleniumTestBase
    {

        [TestMethod]
        public void Button_InputTypeButton_TextContentInside()
        {
            RunInAllBrowsers(browser =>
            {
                browser.NavigateToUrl("ControlSamples/Button_InputTypeButton_TextContentInside");

                browser.First("input[type=button]")
                    .CheckAttribute("value", "This is text");
            });
        }

        [TestMethod]
        public void Button_InputTypeButton_HtmlContentInside()
        {
            RunInAllBrowsers(browser =>
            {
                browser.NavigateToUrl("ControlSamples/Button_InputTypeButton_HtmlContentInside");

                browser.First("p.summary")
                    .CheckIfInnerText(t => t.Contains("DotVVM.Framework.Exceptions.DotvvmControlException")
                        && t.Contains("The <dot:Button> control cannot have inner HTML connect unless the 'ButtonTagName' property is set to 'button'!"));
            });
        }

    }
}