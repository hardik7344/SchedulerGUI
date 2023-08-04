using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Scheduler.Controllers
{
    public class NewController : Controller
    {
        public IActionResult masterPage()
        {
            return View();
        }
        public IActionResult mainPage()
        {
            return View();
        }
    }
}