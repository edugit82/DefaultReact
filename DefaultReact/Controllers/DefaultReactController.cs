using Microsoft.AspNetCore.Mvc;

namespace DefaultReact.Controllers
{
    public class DefaultReactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
