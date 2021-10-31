<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
        use Symfony\Component\Routing\Annotation\Route;
class HomeController extends AbstractController
    {
        #[Route('/home', name: 'home')]
    public function index(): Response
    {

        $vartest = "coucou";
        return $this->render('home/index.html.twig', ['controller_name' => $vartest,
            'azerf' => $vartest,'controlleferzr_name' => $vartest,
        'ezefff' => $vartest,
        
        
        'azdzada' => $vartest,


        ]);
    }

    /**
     * 
     * @param string $number 
     * @return int 
     */
    private function test(int $number)
    {
        return $number;
    }
}
              
  
 