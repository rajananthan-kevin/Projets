<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    public function Create(Request $request) {
        $project = new Project();

        $project->nom = $request->get('nom');
        $project->date = $request->get('date');
        $project->languages = $request->get('languages');
        $project->description = $request->get('description');

        $res = $project->save();
        if ($res == 1)
            return  response()->json(201);
        else 
            return  response()->json(400);
    }

    public function Read($id)
    {
        $project = DB::table('project')
                ->whereRaw('id = ?', [$id])
                ->get();
        return response()->json($project,200);

    }

    public function ALLRead()
    {
        $project = Project::all('id','nom','description','date','languages');
        return response()->json($project, 200);

        

    }

    public function Update(Request $request, $id)
    {
        $project = Project::where('id', '=', $id)->first();
        $project->update($request->all());
        return response()->json(201);
    }

    public function Delete($id)
    {
        $project = Project::where('id',$id)->firstOrFail();
        $res = $project->delete();
        if ($res == 1)
            return  response()->json(201);
        else 
            return  response()->json(400);
    }
}
