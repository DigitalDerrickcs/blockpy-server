from flask_rebar import Rebar, SwaggerV3Generator

rebar = Rebar()
generator = SwaggerV3Generator()
registry = rebar.create_handler_registry(swagger_generator=generator)
