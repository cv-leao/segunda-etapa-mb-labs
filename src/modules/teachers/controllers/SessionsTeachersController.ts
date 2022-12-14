import { Request, Response } from "express";
import CreateSessionsService from "../services/CreateSessionsService";

export default class SessionsTeachersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createSession = new CreateSessionsService();

    const teacher = await createSession
      .execute({
        email,
        password,
      })
      .catch((error) => {
        response.statusCode = 401;
        return error;
      });

    response.cookie("token", teacher.token, {
      maxAge: new Date(Date.now() + 999999999).getTime(),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    return response.json(teacher.teacher);
  }
}
